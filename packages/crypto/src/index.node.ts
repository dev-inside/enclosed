import { createEnclosedCryptoApi } from './api-definition';
import * as webCryptoApi from './node/crypto.node.usecases';
import { aes256GcmEncryptionAlgorithmDefinition } from './node/encryption-algorithms/crypto.node.aes-256-gcm';

export type { EncryptionAlgorithm, EncryptionAlgorithmDefinitions, EncryptionMethodsDefinition } from './encryption-algorithms/encryption-algorithms.types';

export const {
  deriveMasterKey,
  generateBaseKey,
  encryptionAlgorithms,
  encryptionMethodDefinitions,
  getDecryptionMethod,
  getEncryptionMethod,
  base64UrlToBuffer,
  bufferToBase64Url,
} = createEnclosedCryptoApi({
  ...webCryptoApi,
  encryptionMethodDefinitions: {
    'aes-256-gcm': aes256GcmEncryptionAlgorithmDefinition,
  },
});
