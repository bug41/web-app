import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'web-app',
  webDir: 'out',
  server: {
    url: 'http://192.168.56.1:3000',
    cleartext: true,
    androidScheme: 'https'
  }
};

export default config;
