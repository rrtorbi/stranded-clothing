import CategoryItem from "../categoryItem/categoryItem"
import './components.style.scss'
const Directory = ({categories}) => {
    return (
        categories.map((category) => {
          return (
            <CategoryItem category={category} key={category.id}/>
          )
        })
    )
}

export default Directory