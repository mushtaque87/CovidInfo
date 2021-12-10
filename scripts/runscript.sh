echo '******** Clean Build and Node Modules ********'
#rm -rf ~/Library/Developer/Xcode/DerivedData/*
rm -rf node_modules/ && yarn install

echo '******** Pod Install ********'
cd ios && rm -rf Pods/ && pod deintegrate && rm -rf Podfile.lock && pod install


echo '******** Start Yarn ********'
yarn start

echo '******** Start iOS App in default simulator ********'
yarn ios
