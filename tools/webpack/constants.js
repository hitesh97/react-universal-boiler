/* eslint-disable camelcase */
export const CACHE_HASH_TYPE = 'sha256';
export const CACHE_DIGEST_TYPE = 'base62';
export const CACHE_DIGEST_LENGTH = 4;

export const JS_FILES = /\.(js|mjs|jsx|js.flow)$/;
export const STYLE_FILES = /\.(css|scss|pcss)$/;
export const ASSET_FILES = /\.(eot|woff|woff2|ttf|otf|svg|png|jpg|jpeg|jp2|jpx|jxr|gif|webp|mp4|mp3|ogg|pdf|html|ico)$/;

export const REQUIRED_ENV_VARS = ['SERVER_OUTPUT', 'CLIENT_OUTPUT', 'PUBLIC_PATH', 'PORT'];
