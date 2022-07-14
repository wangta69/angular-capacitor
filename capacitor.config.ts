import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'pondol.study.capacitor.angular',
  appName: 'angular-capacitor',
  webDir: 'dist/angular-capacitor',
  bundledWebRuntime: false,
 server: {
      url: 'http://192.168.0.21:4200',
      cleartext: true
  }
};

export default config;
