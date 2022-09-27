import { useDeferredValue, useEffect, useState } from 'react'

const ProductCards = ({ name }: { name: string }) => {
  const [products, setProducts] = useState<string[]>([])

  useEffect(() => {
    console.log(name)
    // Tính toán nặng
    const SIZE = 19999
    const result = []
    for (let i = 0; i < SIZE; i++) {
      result.push(name)
    }
    setProducts(result)
  }, [name])

  // Render một danh sách lớn => tốn thời gian
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>{product}</div>
      ))}
    </div>
  )
}

export default function ProductList() {
  const [name, setName] = useState<string>('')
  const deferredName = useDeferredValue(name)
  return (
    <div>
      <h1>Product List</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type='text'
        placeholder='type to render'
        autoFocus
      />
      <ProductCards name={deferredName} />
    </div>
  )
}
