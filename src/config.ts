import { config } from 'dotenv';
import { z } from 'zod';

config();

const NodeEnvEnum = z.enum(['development', 'test', 'production']);
type NodeEnvType = z.infer<typeof NodeEnvEnum>;

const envSchema = z.object({
  NODE_ENV: NodeEnvEnum.default('development'),
  PORT: z.string().transform(Number).pipe(
    z.number().int().positive(),
  ).default('3000'),
});

// eslint-disable-next-line node/no-process-env
const env = envSchema.safeParse(process.env);

if (!env.success) {
  console.error('❌ Invalid environment variables:', env.error.format());
  throw new Error('Invalid environment variables');
}

const serverEnv = {
  nodeEnv: env.data.NODE_ENV,
  port: env.data.PORT,
};

export { NodeEnvType, serverEnv };
