export function Drawer({children}:{children:string|React.ReactElement}){
    return       <div className="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
   
      <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        {/* Sidebar content here */}
       {children}
      </ul>
    </div>
  </div>

}