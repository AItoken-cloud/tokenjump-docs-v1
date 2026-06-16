module.exports = {
  apps: [
    {
      name: 'tokenjump-docs-v1',
      script: './.next/standalone/server.js', // 启动入口
      cwd: '/home/token/app/deploy/tokenjump-docs-v1', // 工作目录
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 8000,
        HOSTNAME: '0.0.0.0'
      }
    }
  ]
}