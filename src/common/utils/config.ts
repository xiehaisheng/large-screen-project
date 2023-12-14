const configs = {
  common: {
    name: "test",
    env: process.env.NODE_ENV as "development" | "production",
    basePath: __PATH__,
    defaultPage: "/home",
  },
  development: {},
  production: {},
};

const _config = configs[configs.common.env];

if (!_config) {
  throw new Error("配置不正确");
}

export const config = {
  ...configs.common,
  ..._config,
};
