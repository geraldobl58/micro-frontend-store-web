// @ts-ignore
import { Navigate } from '@shoppe/util-ui'

export default function Root() {
  return <section>
    <h1>My Header</h1>
    <Navigate path="/account">Account</Navigate>
    <Navigate path="/cart">Cart</Navigate>
    <Navigate path="/product">Product</Navigate>
    <Navigate path="/shop">Product</Navigate>
  </section>;
}
