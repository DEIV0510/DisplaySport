@echo off
REM ====================================================================
REM DISPLAY SPORT - Launcher de doble click para el servidor local.
REM Llama al script PowerShell saltandose la Execution Policy.
REM ====================================================================
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-server.ps1" -Port 8090
pause
