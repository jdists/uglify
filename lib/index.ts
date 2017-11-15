import * as uglify from 'uglify-js'
import * as jdistsUtil from 'jdists-util'
interface IUglifyAttrs extends jdistsUtil.IAttrs {
  /**
   * 是否只包含 ascii 字符
   */
  ascii?: string
}
/**
 * uglify 代码压缩
 *
 * @param content 文本内容
 * @param attrs 属性
 * @param attrs.ascii 是否只包含 ascii 字符
 * @param scope 作用域
 * @param scope.execImport 导入数据
 * @param scope.compile 编译 jdists 文本
 * @return 返回渲染后的结果
 * @example processor():base
  ```js
  let attrs = {}
  let scope = {}
  console.log(processor(`
  function calc(number) {
    var result = 0
    for (var i = 0; i < number; i++) {
      result += i
    }
    return '数:' + result
  }
  `, attrs, scope))
  // > function calc(r){for(var c=0,n=0;n<r;n++)c+=n;return"数:"+c}
  ```
 * @example processor():ascii is true
  ```js
  let attrs = {
    ascii: 'yes',
  }
  let scope = {}
  console.log(processor(`
  function calc(number) {
    var result = 0
    for (var i = 0; i < number; i++) {
      result += i
    }
    return '数:' + result
  }
  `, attrs, scope))
  // > function calc(r){for(var c=0,n=0;n<r;n++)c+=n;return"\u6570:"+c}
  ```
 * @example processor():content is null
  ```js
  let attrs = {}
  let scope = {}
  console.log(processor(null, attrs, scope))
  // > null
  ```
 */
export = (function (content: string, attrs: IUglifyAttrs, scope: jdistsUtil.IScope): string {
  if (!content) {
    return content
  }
  return uglify.minify(content, {
    output: {
      ascii_only: jdistsUtil.isYes(attrs.ascii)
    } as any
  }).code
}) as jdistsUtil.IProcessor
