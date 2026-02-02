# Installing nvm-windows

Follow these steps to install nvm-windows on your machine:

## Step 1: Download nvm-windows

1. Go to: https://github.com/coreybutler/nvm-windows/releases/latest
2. Download the **nvm-setup.zip** file (or **nvm-setup.exe** if available)
3. Extract the zip file if needed

## Step 2: Run the Installer

1. Right-click on `nvm-setup.exe` and select **"Run as administrator"**
2. Follow the installation wizard:
   - Accept the license agreement
   - Choose installation location (default is fine)
   - Click "Install"
3. Complete the installation

## Step 3: Verify Installation

After installation, **close and reopen your terminal/PowerShell**, then run:

```powershell
nvm version
```

You should see the version number (e.g., `1.2.2`).

## Step 4: Install Node.js

Once nvm is installed, install the latest LTS version of Node.js:

```powershell
nvm install lts
nvm use lts
```

Or install a specific version:

```powershell
nvm install 20.11.0
nvm use 20.11.0
```

## Step 5: Verify Node.js and npm

```powershell
node --version
npm --version
```

## Step 6: Install Project Dependencies

Navigate to your project directory and run:

```powershell
npm install
```

## Troubleshooting

- If `nvm` command is not recognized after installation, restart your terminal/PowerShell
- Make sure you ran the installer as administrator
- Check that nvm was added to your system PATH
