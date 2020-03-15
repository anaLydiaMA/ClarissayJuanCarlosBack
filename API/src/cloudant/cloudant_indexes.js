exports.object_indexes = {
  "example_text_index": {
    name: 'example_text_index',
    type: 'text',
    index: {
      fields: [{
        name: 'field1.[].field2',
        type: 'string'
      }]
    }
  },
  "example_json_index": {
    name: 'example_json_index',
    type: 'json',
    index: {
      fields: ['field1','field2']
    }
  }
}
