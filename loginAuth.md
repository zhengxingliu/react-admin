request: {
  username: '123',
  password: '123'
}

response: {
  code: 200,
  errMsg: '',
  data: {
    id: '123',
    username: 'aaaa',
    displayNmae: 'John Doe',
    avatar: image,
    role: ['001', '002', '003'] // user aceess permission, eg. admin, user, editor
    page: ['/admin/dashboard', '/admin/article/edit'] //page permission
  }
}