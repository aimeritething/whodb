import { zhRedisMessages } from '../zh/redis'

type MessageShape<T extends Record<string, unknown>> = {
  [K in keyof T]: string
}

export const enRedisMessages = {
  'redis.keyModal.titleCreate': 'Add New Key',
  'redis.keyModal.titleEdit': 'Edit Key',
  'redis.keyModal.editDescription': 'Editing is currently supported only for string keys.',
  'redis.key.name': 'Key Name',
  'redis.key.namePlaceholder': 'e.g., users:1001',
  'redis.key.nameReadonly': 'Existing key names are read-only in edit mode.',
  'redis.key.type': 'Type',
  'redis.key.typeReadonly': 'Existing key types are read-only in edit mode.',
  'redis.key.value': 'Value',
  'redis.key.stringPlaceholder': 'Enter string value...',
  'redis.key.hashFieldPlaceholder': 'Field',
  'redis.key.hashValuePlaceholder': 'Value',
  'redis.key.listItemPlaceholder': 'Item value',
  'redis.key.setItemPlaceholder': 'Member value',
  'redis.key.zsetScorePlaceholder': 'Score',
  'redis.key.zsetMemberPlaceholder': 'Member value',
  'redis.key.removeItem': 'Remove Item',
  'redis.key.addField': 'Add Field',
  'redis.key.addItem': 'Add Item',
  'redis.key.addMember': 'Add Member',
  'redis.key.createAction': 'Create Key',
  'redis.key.saveAction': 'Save Value',
  'redis.key.editOnlyString': 'Editing is currently supported only for string keys.',
  'redis.alert.unsupportedEditMode': 'Editing is currently supported only for string keys.',
  'redis.alert.emptyValueRequired': 'Add at least one value before creating this key.',
  'redis.detail.fetchFailed': 'Failed to fetch key data',
  'redis.detail.empty': 'This key has no data.',
} satisfies MessageShape<typeof zhRedisMessages>
