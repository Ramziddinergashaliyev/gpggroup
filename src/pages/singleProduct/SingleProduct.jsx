import React, { useEffect } from 'react'
import "./singleProduct.scss"
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../context/api/productApi'

const SingleProduct = () => {
    const { id } = useParams()
    const { data } = useGetProductByIdQuery(id)

    useEffect(() => {
        scrollTo(0, 0)
    }, [])

    return (
        <div className='singleProduct container'>

            <div className="singleProduct-top">

                <div className="singleProduct-top-left">

                    <div className="singleProduct-top-left-big">
                        <img src={data?.images[0]} alt="big-img" />
                    </div>

                    <div className="singleProduct-top-left-small">
                        {
                            data?.images?.map((el, inx) => (
                                <img key={inx} src={el} alt="small-img-one" />
                            ))
                        }
                    </div>

                </div>

                <div className="singleProduct-top-right">
                    <h4 className='singleProduct-top-right-title'>{data?.nameRu}</h4>
                    <p className="singleProduct-top-right-text">{data?.descriptionRu}</p>
                </div>

            </div>

            <div className="single-table">
                <div className="single-table-top">
                    <h2 className='single-table-top-title'>Характеристики</h2>
                </div>

                <h3 className="single-table-title">Основные физико-химические характеристики</h3>

                <table className='single-table-item'>

                    <thead className='single-table-item-thead'>
                        <tr className='single-table-item-tr'>
                            <th className='single-table-item-th'>Название индикатора</th>
                            <th className='single-table-item-th'>Название индикатора</th>
                            <th className='single-table-item-th'>Название индикатора</th>
                        </tr>
                    </thead>

                    <tbody className='single-table-item-tbody'>
                        <tr className='single-table-item-tbody-tr'>
                            <td className='single-table-item-tbody-td'>Класс вязкости SAE</td>
                            <td className='single-table-item-tbody-td'>10W-40</td>
                            <td className='single-table-item-tbody-td'>САЕ J300</td>
                        </tr>
                        <tr className='single-table-item-tbody-tr'>
                            <td className='single-table-item-tbody-td'>Плотность при 20°С, г/см3</td>
                            <td className='single-table-item-tbody-td'>0,858</td>
                            <td className='single-table-item-tbody-td'>АСТМ Д 1298</td>
                        </tr>
                        <tr className='single-table-item-tbody-tr'>
                            <td className='single-table-item-tbody-td'>Кинематическая вязкость при 40 °С, мм2/с</td>
                            <td className='single-table-item-tbody-td'>101,6</td>
                            <td className='single-table-item-tbody-td'>АСТМ Д 445</td>
                        </tr>
                        <tr className='single-table-item-tbody-tr'>
                            <td className='single-table-item-tbody-td'>Кинематическая вязкость при 100 °С, мм2/с</td>
                            <td className='single-table-item-tbody-td'>15,21</td>
                            <td className='single-table-item-tbody-td'>АСТМ Д 445</td>
                        </tr>
                        <tr className='single-table-item-tbody-tr'>
                            <td className='single-table-item-tbody-td'>Индекс вязкости</td>
                            <td className='single-table-item-tbody-td'>154</td>
                            <td className='single-table-item-tbody-td'>АСТМ Д 2270</td>
                        </tr>
                        <tr className='single-table-item-tbody-tr'>
                            <td className='single-table-item-tbody-td'>Температура вспышки в открытом тигле °С</td>
                            <td className='single-table-item-tbody-td'>226</td>
                            <td className='single-table-item-tbody-td'>АСТМ Д 92</td>
                        </tr>
                        <tr className='single-table-item-tbody-tr'>
                            <td className='single-table-item-tbody-td'>Температура затвердевания, °С</td>
                            <td className='single-table-item-tbody-td'>– 35</td>
                            <td className='single-table-item-tbody-td'>АСТМ Д 97</td>
                        </tr>
                        <tr className='single-table-item-tbody-tr'>
                            <td className='single-table-item-tbody-td'>Щелочное число, мг КОН/г</td>
                            <td className='single-table-item-tbody-td'>7,9</td>
                            <td className='single-table-item-tbody-td'>АСТМ Д 2896</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default SingleProduct