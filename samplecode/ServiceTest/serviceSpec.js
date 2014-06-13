describe('Angular service test', function() {
  var Base64Service;

  beforeEach(module("myApp"));
  beforeEach(inject(function(_Base64Service_) {
    Base64Service = _Base64Service_;
  }));

  it('should correctly encode a known message', function() {
    expect(Base64Service.encode('Hello from a simple controller!')).toBe('SGVsbG8lMjBmcm9tJTIwYSUyMHNpbXBsZSUyMGNvbnRyb2xsZXIlMjE=');
  });
});
