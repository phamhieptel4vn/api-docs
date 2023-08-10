---
sidebar_position: 2
title: Get Pitel Token
---


*BACKEND* cần xây dựng một API hoặc một cơ chế để tạo và trả về token client

:::note Lưu ý: Đảm bảo API chỉ được gọi sau khi đã chứng thực nhầm bảo mật token
:::

:::tip API lấy token có thể được thiết kế tùy ý, tham khảo hoặc sử dụng PitelHelper để tạo token tùy thuộc ngôn ngữ lập trình đang sử dụng. 

Golang - [https://github.com/tel4vn/pitel-helpers-go](https://github.com/tel4vn/pitel-helpers-go)  
Python - [https://github.com/tel4vn/pitel-helpers-python](https://github.com/tel4vn/pitel-helpers-python)  
Javascript - [https://github.com/tel4vn/pitel-helpers-es6](https://github.com/tel4vn/pitel-helpers-es6)  
NodeJS - [https://github.com/tel4vn/pitel-helpers-nodejs](https://github.com/tel4vn/pitel-helpers-nodejs)  
PHP - [https://github.com/tel4vn/pitel-helpers-php](https://github.com/tel4vn/pitel-helpers-php)
:::


#### Ví dụ về API nhận token


```python
from .helpers import PitelHelpers
import .config

def generate_token(number="100"):
  helper = PitelHelpers(config.api_key, config.api_secret, number)
  return helper.getAccessToken()
```

```javascript
import PitelHelpers from 'pitel-helper-es6'
import {API_KEY, SECRET_KEY} from './config'

function generate_token(number:string="100") {
  const helper = new PitelHelpers(API_KEY, SECRET_KEY, number);
  return helper.getAccessToken();
}
```