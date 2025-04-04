import { app } from './app';
import { serverEnv } from './config';
import { LOGGER } from './logging';

const port = serverEnv.port;

app.listen(port, () => {
  LOGGER.info(`server running on port ${port} in ${serverEnv.nodeEnv} mode`);
});
