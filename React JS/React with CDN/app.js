let rootEl = document.getElementById("root");
let  reactRoot = ReactDOM.createRoot(rootEl);

let element = <div>
    <h1> Welcome to React JS </h1>
    <h2> React JS class # 01 </h2>
</div>;

reactRoot.render(element);