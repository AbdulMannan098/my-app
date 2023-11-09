import React from 'react'

const ProductUpdateForm = ({values,setValues,handleChange,handleSubmit}) => {

    const {title,
        description,
        price,
        shipping,
        quantity,
        colors
    }=values;

    const handleColorChange = (color) => {
    const updatedColors = colors.includes(color)
      ? colors.filter((c) => c !== color)
      : [...colors, color];

    setValues({...values,colors:updatedColors});
    };
    return (
        <form onSubmit={handleSubmit} style={{marginLeft:"180px"}}>
        <div className="form-group">
            <label>Title</label>
            <input
            type="text"
            name="title"
            style={{width:"60%"}}
            className="form-control"
            value={title}
            onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label>Description</label>
            <textarea
            type="text"
            style={{width:"60%"}}
            name="description"
            className="form-control"
            value={description}
            onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label>Price</label>
            <input
            type="number"
            name="price"
            style={{width:"60%"}}
            className="form-control"
            value={price}
            onChange={handleChange}
            />
        </div>
        <div className="form-group">
        <label>Shipping</label>
           <select 
           name="shipping"
           style={{width:"60%"}}
           className="form-control"
           onChange={handleChange}
           >
            <option>Please Select</option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
            </select>
            </div>
        <div className="form-group">
            <label>Quantity</label>
            <input
            type="number"
            name="quantity"
            className="form-control"
            style={{width:"60%"}}
            value={quantity}
            onChange={handleChange}
            />
        </div>
     
        <div className='form-group'>
            <label className="form-check-label">Colors:</label>
            <div>
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input" 
                  value="red"
                  checked={colors.includes('red')}
                  onChange={() => handleColorChange('red')}
                />
                Red
              </label>
            </div>
            <div>
            <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input" 
                  value="green"
                  checked={colors.includes('green')}
                  onChange={() => handleColorChange('green')}
                />
                Green
              </label>
            </div>
            <div>
            <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input" 
                  value="blue"
                  checked={colors.includes('blue')}
                  onChange={() => handleColorChange('blue')}
                />
                Blue
              </label>
            </div>
    </div>
            <br/>
        <button type='submit' className="btn btn-outline-info">
        Update
        </button>                   
       </form>
        )
    }

export default ProductUpdateForm