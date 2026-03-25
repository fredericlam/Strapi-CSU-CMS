'use strict';

/**
 * annual-meeting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::annual-meeting.annual-meeting');
