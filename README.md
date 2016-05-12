<!-- VDOC.badges travis; npm; coveralls -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
[![Build Status](https://travis-ci.org/vigour-io/ua-cases.svg?branch=master)](https://travis-ci.org/vigour-io/ua-cases)
[![npm version](https://badge.fury.io/js/ua-cases.svg)](https://badge.fury.io/js/ua-cases)
[![Coverage Status](https://coveralls.io/repos/github/vigour-io/ua-cases/badge.svg?branch=master)](https://coveralls.io/github/vigour-io/ua-cases?branch=master)

<!-- VDOC END -->
Parses your object, modifying it for user agent cases and defined cases that apply.
<!-- VDOC.jsdoc cases -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var obj = cases(useragent, cases, transform)

Returns a cases object bases on the user agent including data such as browser, device and platform
- **useragent** (*string|object*) - user agent string or vigour-ua object
- **cases** (*object*) - (optional) object to be merged to the output result
- **transform** (*function*) - (optional) function to modify the cases object before it's returned
- **returns** (*object*) obj - cases object

<!-- VDOC END -->