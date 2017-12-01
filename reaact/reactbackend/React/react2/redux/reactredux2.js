  @asyncConnect([{
  key: 'lunch',
  promise: ({ params, helpers }) => Promise.resolve({ id: 1, name: 'Borsch' })
}]);
