import cloudinary from 'cloudinary';
import cloudConfig from '@/config/cloudinary_config';

cloudinary.v2.config(cloudConfig);