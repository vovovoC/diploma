import "./index.scss";
import { useEffect } from "react";

export const Notification = (props:any) => {
  const list = props.list;

  //delete notification on click x(close);
  const deleteNtf:any = (id: any) => {
    const ntfList = list.filter((e: { id: any; }) => e.id !== id);
    props.showNtf(ntfList);
  };

  //delet notification after 3s
  useEffect(() => {
    const interval = setInterval(() => {
      if(list.length){
        deleteNtf(list[0].id);
      }
    },3000);
    return () => {clearInterval(interval);}
  }, [list, deleteNtf]);

  return (
      <div className="notification-item">
        {
          list.map((ntf:any, i:any) => (
            <div key={i} className="ntfcard">
              <div className={ntf.type}>
                    <button className="close-btn" onClick={() => deleteNtf(ntf.id)}>&#x2716;</button>
                    <div>
                      <p className="ntf-title">{ntf.title}</p>
                      <p className="ntf-msg">{ntf.msg}</p>
                    </div>
              </div>
            </div>
          ))
        }
      </div>    
  );
};
