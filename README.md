## Next.js , capacitor 를 이용하여 안드로이드, ios 앱 배포

```bash
package.json 파일에 "static": "next build && next export" 추가
```

```bash
npm install -D @capacitor/cli

npx cap init

npm install @capacitor/core @capacitor/ios @capacitor/android

#XCODE 여는거
npx cap add ios 

#Android Studio 여는거
npx cap add android

#뭐 수정되고나면 sync 해줘야되는듯함
npx cap sync
```

- npx run build 실행 오류시 기존 npm run dev 실행중인거 끄고 진행
- out 폴더 생성 안되면 next.config.js 파일에 output: 'export' 추가 해줘야함
