// Use types from .versionrc.js so that when generating CHANGELOG there are no inconsistencies
import standardVersionTypes from './.versionrc.js';
const typeEnums = standardVersionTypes.types.map(t => t.type);

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', typeEnums],
  },
};
