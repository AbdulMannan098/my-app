import React, { useState } from 'react'
import ProductCreateForm from '../../Components/forms/ProductCreateForm';
import {toast} from 'react-toastify'
import {LoadingOutlined} from '@ant-design/icons'
import {createProduct} from '../../functions/product.js'
const initialState={
  title:"",
  description:"",
  price:"",
  shipping:"",
  quantity:"",
  colors:[]
  };


const AddProducts = () => {
  const [values,setValues]=useState(initialState)
  const [loading,setLoading]=useState(false)
  // const [title,setTitle]=useState("");
  // const [description,setDescription]=useState("")
  // const [quantity,setQuantity]=useState("")
  // const [price,setPrice]=useState("")
  // const [shipping,setShipping]=useState(false)
  const handleSubmit=(e)=>{
    e.preventDefault();
    createProduct(values)
    .then(res=>{
        console.log(res);    
         toast.success(`${res.data.title} Product has been created`)
        // setValues("")
        window.alert(`"${res.data.title}" is created `)
        window.location.reload()
    })
    .catch((err)=>{
        console.log(err);
        // if(err.response.status===400) toast.error(err.response.data)
        toast.error(err.response.data.err)
    })
}
const handleChange=(e)=>{
  setValues({...values,[e.target.name]:e.target.value})
  // console.log(e.target.name,"-----",e.target.value);
}


  return (
    <div className="container-fluid">
    <div className="row">
        <div className="col-md-2">
        </div>
        <div className="col-md-10">
        {loading ? < LoadingOutlined className="text-danger h1"/> :<h4>Product Create</h4>
        }
        <hr/>

      </div>
      
      <ProductCreateForm
      values={values}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      setValues={setValues}
      />
        </div>
    </div>
)
  }
  
  export default AddProducts































// <div className='form-group'>
    //   <h2 className='text-center'>Add Products</h2>
    //   <form className='form-group'>
    //   <input type='text' className='form-control-color' title='Enter Product Title' value={title} onChange={(e)=>{setTitle(e.target.value)}} alt='Enter Product Title Here' placeholder='Enter Product Title'/>
    //   <input type='text' className='form-control-color' title='Enter Product Description' value={description} onChange={(e)=>{setDescription(e.target.value)}} alt='Enter Product Description Here' placeholder='Enter Product Description'/>
    //   <input type='number' className='form-control-color' title='Enter Product Price' value={price} onChange={(e)=>{setPrice(e.target.value)}} alt='Enter Product Price Here' placeholder='Enter Product Price'/>
    //   <input type='number' className='form-control-color' title='Enter Product Quantity Available' value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} alt='Enter Product Quantity Available Here' placeholder='Enter Product Quantity Available'/>
    //   <input type='radio' className='form-control-color' title='Enter Product Shipping Status' value={shipping} onChange={(e)=>{setShipping(e.target.value)}} alt='Enter Product Shipping ' placeholder='Enter Product Shipping'/>       
    //   </form>
      {/* <body>
      <div id="root"><div class="Preview__Container-sc-1jggitl-0 ilHaSz">
      <div id="eapps-form-builder-ebe8baf0-40e2-452f-9950-cb93ff278fb5" class="RootLayout__RootComponent-sc-1doisyz-0 cvBsnK eapps-form-builder-ebe8baf0-40e2-452f-9950-cb93ff278fb5-custom-css-hook" data-app="eapps-form-builder" data-app-version="1.20.2">
      <div className="Content__WidgetContainer-sc-3sh3bs-2 RWsCS">
      <div className="WidgetBackground__Container-sc-1ho7q3r-0 hsrHoI" style={{: 100%, box-shadow: none, border-radius: 0px, padding: 0px}}>
      <div className="Background__Container-sc-4lq1r6-0 itZoLS">
      <div className="Background__Base-sc-4lq1r6-1 egiTHk" style="display: block; background-color: transparent;">
      </div>
      <div className="Background__Overlay-sc-4lq1r6-2 djWGwD" style="display: block; background-color: rgba(255, 255, 255, 0);">
      </div>
      </div>
      <div className="WidgetBackground__ContentContainer-sc-1ho7q3r-1 fyVdxN">
      <div className="WidgetBackground__Content-sc-1ho7q3r-2 jdVdAT"><div className="Content__Font-sc-3sh3bs-0 fJTPIq">
      <div className="WidgetTitle__Container-sc-ruy1gu-0 iWJRdu">
      <div className="WidgetTitle__Inner-sc-ruy1gu-1 SZtf">
      <div className="WidgetTitle__Header-sc-ruy1gu-2 dBDOqu">
      Blank Form
      </div>
      </div>
      </div>
      <form className="FormLayout__Container-sc-2kg2eg-0 iNyYeg">
      <div className="FieldsGrid__Grid-sc-1luipcv-0 hCmtez">
      <div className="FieldsGrid__Row-sc-1luipcv-1 gRPRAW">
      <div className="FormFieldLayout__Container-sc-1m85c11-3 bNFzUR">
      <label for="lmtjvctq" className="FormFieldLayout__Label-sc-1m85c11-0 kDRQtc">
      Enter Product Title *</label>
      <div className="TextControlBase__TextControlBaseContainer-sc-1s66zih-0 bBKQWp FieldContainer__FieldLayout-sc-gwguj-0 jrogik" style="padding: 10px 15px; border-width: 1px; border-radius: 2px; font-style: normal; font-weight: normal; font-size: 15px; line-height: 20px; border-color: rgba(153, 153, 153, 0.4); background: transparent; color: rgb(0, 0, 0); opacity: 1;"><div className="TextControlBase__TextControlBaseInner-sc-1s66zih-1 cjvHgB">
      <div className="TextControlBase__TextControlBaseInputWrapper-sc-1s66zih-3 ckjMpy" style="opacity: 1; transform: none;">
      <div className="TextControlBase__TextControlBasePlaceholder-sc-1s66zih-8 CWjVC" style="font-style: normal; font-weight: 400; color: rgba(0, 0, 0, 0.45);">Enter Product Title</div>
      <input id="lmtjvctq" aria-required="true" type="URL" autocomplete="off" className="TextControlBase__TextControlBaseInput-sc-1s66zih-4 gBjtAo" value=""/>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="FieldsGrid__Row-sc-1luipcv-1 gRPRAW"><div className="FormFieldLayout__Container-sc-1m85c11-3 bNFzUR"><label for="lmtjx1fe" className="FormFieldLayout__Label-sc-1m85c11-0 kDRQtc">
      Description *</label>
      <div className="TextControlBase__TextControlBaseContainer-sc-1s66zih-0 bBKQWp Component__LongTextControl-sc-1d5gelu-0 iQKCoy FieldContainer__FieldLayout-sc-gwguj-0 jrogik" style="padding: 10px 15px; border-width: 1px; border-radius: 2px; font-style: normal; font-weight: normal; font-size: 15px; line-height: 20px; border-color: rgba(153, 153, 153, 0.4); background: transparent; color: rgb(0, 0, 0); opacity: 1;">
      <div className="TextControlBase__TextControlBaseInner-sc-1s66zih-1 cjvHgB">
      <div className="TextControlBase__TextControlBaseInputWrapper-sc-1s66zih-3 ckjMpy" style="opacity: 1; transform: none;">
      <div className="TextControlBase__TextControlBasePlaceholder-sc-1s66zih-8 CWjVC" style="font-style: normal; font-weight: 400; color: rgba(0, 0, 0, 0.45);">
      Enter Description of Product
      </div>
      <textarea id="lmtjx1fe" aria-required="true" className="TextControlBase__TextControlBaseTextarea-sc-1s66zih-5 cMzWHf" style="height: 60px !important;">
      </textarea>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="FieldsGrid__Row-sc-1luipcv-1 gRPRAW">
      <div className="FormFieldLayout__Container-sc-1m85c11-3 bNFzUR">
      <label for="lmtjy7aw" className="FormFieldLayout__Label-sc-1m85c11-0 kDRQtc">Price  *
      </label>
      <div className="TextControlBase__TextControlBaseContainer-sc-1s66zih-0 bBKQWp FieldContainer__FieldLayout-sc-gwguj-0 jrogik" style="padding: 10px 15px; border-width: 1px; border-radius: 2px; font-style: normal; font-weight: normal; font-size: 15px; line-height: 20px; border-color: rgba(153, 153, 153, 0.4); background: transparent; color: rgb(0, 0, 0); opacity: 1;">
      <div className="TextControlBase__TextControlBaseInner-sc-1s66zih-1 cjvHgB">
      <div className="TextControlBase__TextControlBaseInputWrapper-sc-1s66zih-3 ckjMpy" style="opacity: 1; transform: none;">
      <div className="TextControlBase__TextControlBasePlaceholder-sc-1s66zih-8 CWjVC" style="font-style: normal; font-weight: 400; color: rgba(0, 0, 0, 0.45);">Enter Product Price</div>
      <input id="lmtjy7aw" aria-required="true" type="text" autocomplete="off" className="TextControlBase__TextControlBaseInput-sc-1s66zih-4 gBjtAo" value=""/>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="FieldsGrid__Row-sc-1luipcv-1 gRPRAW">
      <div className="FormFieldLayout__Container-sc-1m85c11-3 bNFzUR">
      <label for="lmtjztq3" className="FormFieldLayout__Label-sc-1m85c11-0 kDRQtc">Quantity *</label>
      <div className="TextControlBase__TextControlBaseContainer-sc-1s66zih-0 bBKQWp FieldContainer__FieldLayout-sc-gwguj-0 jrogik" style="padding: 10px 15px; border-width: 1px; border-radius: 2px; font-style: normal; font-weight: normal; font-size: 15px; line-height: 20px; border-color: rgba(153, 153, 153, 0.4); background: transparent; color: rgb(0, 0, 0); opacity: 1;">
      <div className="TextControlBase__TextControlBaseInner-sc-1s66zih-1 cjvHgB">
      <div className="TextControlBase__TextControlBaseInputWrapper-sc-1s66zih-3 ckjMpy" style="opacity: 1; transform: none;">
      <div className="TextControlBase__TextControlBasePlaceholder-sc-1s66zih-8 CWjVC" style="font-style: normal; font-weight: 400; color: rgba(0, 0, 0, 0.45);">Enter Quantity Available</div>
      <input id="lmtjztq3" aria-required="true" type="text" autocomplete="off" className="TextControlBase__TextControlBaseInput-sc-1s66zih-4 gBjtAo" value="" />
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="FieldsGrid__Row-sc-1luipcv-1 gRPRAW"><div className="FormFieldLayout__Container-sc-1m85c11-3 bNFzUR">
      <label for="lmtk2f1k" className="FormFieldLayout__Label-sc-1m85c11-0 kDRQtc">Shipping </label>
      <div aria-required="false" className="Choice__OptionsContainer-sc-ssh0l1-2 Lqufs" style="font-size: 15px; font-weight: normal; font-style: normal; color: rgb(0, 0, 0); grid-template-columns: 100%;">
      <label className="ChoiceOption__Label-sc-tsji91-0 euxDiJ">
      <input id="yayuk8ve" type="radio" name="Shipping " className="ChoiceOption__Input-sc-tsji91-7 koZloZ" value="Yes"/>
      <div className="ChoiceOption__Container-sc-tsji91-1 hYYZac">
      <div className="ChoiceOption__Item-sc-tsji91-4 ChoiceOption__RadioControl-sc-tsji91-5 kXVbov jkcheS"></div><div className="ChoiceOption__Overlay-sc-tsji91-2 lmxcmw" style="background-color: rgb(0, 0, 0);">
      </div>
      </div>
      <div className="ChoiceOption__ItemLabel-sc-tsji91-3 gQUKSQ" style="font-size: 15px; line-height: 24px; margin-left: 8px;">Yes</div></label>
      <label className="ChoiceOption__Label-sc-tsji91-0 euxDiJ">
      <input id="twjpfkt4" type="radio" name="Shipping " className="ChoiceOption__Input-sc-tsji91-7 koZloZ" value="No"/>
      <div className="ChoiceOption__Container-sc-tsji91-1 hYYZac"><div className="ChoiceOption__Item-sc-tsji91-4 ChoiceOption__RadioControl-sc-tsji91-5 kXVbov jkcheS">
      </div>
      <div className="ChoiceOption__Overlay-sc-tsji91-2 lmxcmw" style="background-color: rgb(0, 0, 0);">
      </div>
      </div>
      <div className="ChoiceOption__ItemLabel-sc-tsji91-3 gQUKSQ" style="font-size: 15px; line-height: 24px; margin-left: 8px;">No</div>
      </label>
      </div>
      </div>
      </div>
      <div className="FieldsGrid__Row-sc-1luipcv-1 gRPRAW"><div className="FormFieldLayout__Container-sc-1m85c11-3 bNFzUR">
      <div aria-required="true" className="Choice__OptionsContainer-sc-ssh0l1-2 Lqufs" style="font-size: 15px; font-weight: normal; font-style: normal; color: rgb(0, 0, 0); grid-template-columns: 100%;">
      <label className="ChoiceOption__Label-sc-tsji91-0 euxDiJ">
      <input id="consent" type="checkbox" required="" className="ChoiceOption__Input-sc-tsji91-7 koZloZ" value="<div>I’ve read and agree with <a target=&quot;_blank&quot; href=&quot;https://elfsight.com&quot;>Terms of Service</a> and <a target=&quot;_blank&quot; href=&quot;https://elfsight.com&quot;>Privacy Policy</a></div>"/>
      <div className="ChoiceOption__Container-sc-tsji91-1 hYYZac"><div className="ChoiceOption__Item-sc-tsji91-4 ChoiceOption__ChoiceControl-sc-tsji91-6 kXVbov iHycBz"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M20.293 5.293a1 1 0 0 1 1.497 1.32l-.083.094L9.332 19.082a1 1 0 0 1-1.32.083l-.094-.083-5.625-5.625a1 1 0 0 1 1.32-1.497l.094.083 4.918 4.917L20.293 5.293Z">
      </path>
      </svg>
      </div>
      <div className="ChoiceOption__Overlay-sc-tsji91-2 lmxcmw" style="background-color: rgb(0, 0, 0);">
      </div>
      </div>
      <div className="ChoiceOption__ItemLabel-sc-tsji91-3 gQUKSQ" style="font-size: 15px; line-height: 24px; margin-left: 8px;"><div>I’ve read and agree with <a target="_blank" href="https://elfsight.com">Terms of Service</a> and <a target="_blank" href="https://elfsight.com">Privacy Policy</a>
      </div>
      </div>
      </label>
      </div>
      </div>
      </div>
      </div>
      <div className="FormLayout__Footer-sc-2kg2eg-8 fzBvFL">
      <div className="FormLayout__ButtonsGroup-sc-2kg2eg-11 fAsWhd">
      <button aria-label="Submit" type="button" tabindex="0" className="ButtonBase__ButtonContainer-sc-p43e7i-3 euBiGU" style="border-radius: 4px; border-color: rgba(0, 0, 0, 0); color: rgb(255, 255, 255); font-family: inherit; font-weight: bold; font-size: 16px; font-style: normal; background-color: rgb(28, 145, 255); border-width: 2px;"><span className="ButtonBase__Overlay-sc-p43e7i-4 jUXzLe" style="padding: 11px 30px; background-color: rgba(0, 0, 0, 0);">
      <span className="ButtonBase__Ellipsis-sc-p43e7i-5 dqiKFy">Submit</span>
      </span>
      </button>
      </div>
      </div>
      </form></div></div></div></div></div>
      </div></div></div>
      <script defer="defer" src="../preview/index.js"></script><textarea tabindex="-1" aria-hidden="true" style="min-height: 0px !important; max-height: none !important; height: 0px !important; visibility: hidden !important; overflow: hidden !important; position: absolute !important; z-index: -1000 !important; top: 0px !important; right: 0px !important; border-width: 0px; box-sizing: border-box; font-family: system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; font-size: 15px; font-style: normal; font-weight: 400; letter-spacing: normal; line-height: 20px; padding: 0px; tab-size: 8; text-indent: 0px; text-rendering: auto; text-transform: none; width: 273px; word-break: normal;"></textarea><div><div id="portal-ebe8baf0-40e2-452f-9950-cb93ff278fb5" className="RootLayout__RootComponent-sc-1doisyz-0 cvBsnK eapps-form-builder-ebe8baf0-40e2-452f-9950-cb93ff278fb5-custom-css-hook"></div></div></body> */}
    // </div>
