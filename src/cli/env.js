const parseEnv = () => {
    const prefix = 'RSS_';
    const value = Object.entries(process.env)
                            .filter(([key]) => key.startsWith(prefix))
                            .map(([key, value]) => `${key}=${value}`)
                            .join('; ');
    console.log(value);
};
  
parseEnv();