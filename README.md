* 在线 redux 库链接来自[bootcdn](https://www.bootcdn.cn/redux/)

#### counter
* 原生 redux
> redux 的思想很简单，就是只有 store 拥有存储和维护数据（state）的权限。
#### counter2
* redux , react
1. react 实现了局部更新，这是唯一相比原生 redux 的进步之处。
2. 如果只用 redux,react，一个子组件想接触 store 必须依靠它的父组件将 store 作为 props 传递过来。
#### counter3
* react,redux,React-redux
1. state 储存 store 当前状态；action 定义 store 状态变更规则；
2. dispath 提交状态变更
```
action={
    type:...
    payload:...
}
dispatch(action)
```
2. connect 将组件与 store 相连接。 
```
// 将 store 状态设置为组件 props
const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

// 将 action 相关函数设置为组件 props
const mapDispatchToProps = {
  increment,
  decrement
}

// 将组件与 store 连接
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
```
3. Provider 负责提供 Store ,用 Provider 包裹的所有组件及其子组件都可直接与 Store 相联系（Provider 只需调用一次）
> 比如在本例中,Counter 和 Other 都可以直接与 Store 相联系
4. reducer
> 根据旧的 state 返回新的 state
---

#### redux 是基于发布/订阅模式的
``
Event(name.data)->Action(Type,Paylod)
Trigger->Dispatch
on->Subscribe
```
