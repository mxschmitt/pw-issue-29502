import { defineConfig, devices } from '@playwright/test';
 
const port = 3000;

export const previewUrl = `http://localhost:3000`;

export default defineConfig({
  testDir: './scopes',
workers: 1,

  reporter: 'html',

  use: {
    baseURL: 'previewUrl',
    trace: 'on-first-retry',
  },


  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    
  ],

 
});
