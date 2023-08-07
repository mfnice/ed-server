import Dysmsapi20170525 from '@alicloud/dysmsapi20170525';
import * as OpenApi from '@alicloud/openapi-client';
import { config } from 'dotenv';

config();
const conf = new OpenApi.Config({
  // 必填，您的 AccessKey ID
  accessKeyId: 'LTAI5tFTDF1LiAfktvDdRCJB',
  // 必填，您的 AccessKey Secret
  accessKeySecret: 'MYAF57DdcwrukBT7L64OK5FZT0xgf7',
});
// 访问的域名
conf.endpoint = 'dysmsapi.aliyuncs.com';
export const msgClient = new Dysmsapi20170525(conf);
