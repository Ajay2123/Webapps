@ECHO OFF

setlocal EnableDelayedExpansion
SET bdir=$~DP0

SET sign=0
SET wassigned=0
SET forcemode=0
SET /A versionlevel=3

IF "%1"=="-h" (
  ECHO Helping
  GOTO :helpend
)

:Loop
IF "%1"=="" GOTO Continue
IF "%1" == "-sign" SET sign=1

IF "%1" == "-sv" (
  GOTO :Setversion
  IF NOT versionlevel == numeric GOTO :die
)
IF "%1" == "-f" SET forcemode=1

SHIFT
GOTO Loop

:Setversion
SHIFT
SET /A versionlevel = %1
GOTO :Loop

:Continue

call npm run manifestupdate %versionlevel%

call npm run zip

IF %sign% == 1 (
  call npm run simplesign
  GOTO :Dosign
)
:Signcontrol

ECHO %wassigned%
IF %wassigned% == 1 (
  IF %forcemode% == 1 (
    call npm run forcedeploysigned
  ) ELSE (
    call npm run simpledeploysigned
  )
) ELSE (
  IF %forcemode% == 1 (
    call npm run forcedeploy
  ) ELSE (
    call npm run simpledeploy
  )
)

GOTO :niceend

:helpend
echo "use -sv <1|2|3> and/or -sign"
GOTO :niceend

:Dosign
SET wassigned=1
GOTO :Signcontrol

:die
ECHO Error

:niceend

ENDLOCAL

TIMEOUT 5
