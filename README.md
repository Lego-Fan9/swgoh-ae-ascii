# SWGoH-AE-ASCII

This tool outputs ASCII versions of images from SWGoH

## To use
First, you must have [Asset Extractor 2](https://github.com/swgoh-utils/swgoh-ae2) running as an API. To do this with Docker see the readme of AssetExtractor. To do this without docker you can run
```
$ git clone --recurse-submodules https://github.com/swgoh-utils/swgoh-ae2.git
$ cd swgoh-ae2
$ dotnet restore swgoh-ae-api.sln
$ cd AssetWebApi
$ dotnet publish "AssetWebApi.csproj" -c release -o ../build --no-restore
$ cd ../build
$ set DISABLE_HTTPS_REDIRECT="true" # On Linux use export instead of set
$ AssetWebApi.exe
```

Now to build SWGoH-AE-ASCII run
```
$ git clone https://github.com/Lego-Fan9/swgoh-ae-ascii.git
$ cd swgoh-ae-ascii
$ npm install
$ npx tsc
```

Now to run it,
```
$ node dist/index.js --ae <ASSET_EXTRACTOR_URL> --assetName <ASSET_NAME> --assetVersion <ASSET_VERSION>
```
Where <ASSET_EXTRACTOR_URL> is the url that was output when you started Asset Extractor, <ASSET_NAME> is the name of the asset you are downloading, ex: charui_b1, and <ASSET_VERSION> is the current asset version, which can be obtained through comlink. 

Optionally, the `-ae` flag can be skipped to instead use the AE_URL environment variable. It will prioritze the flag over the environment variable.

## Help
My images look reallly bad!
> Try increasing terminal size

## Credit
* https://www.npmjs.com/package/asciify-image
  * Provides ASCII conversion. This project uses a slightly modified version stored at src/vendor
* https://www.npmjs.com/package/commander
  * Used to parse command line arguments
* https://github.com/swgoh-utils/swgoh-ae2
  * Used to get SWGoH images