import { useEffect, useState } from "react";
import { useParams } from "react-router";

function HostVanDetail() {
  const [van, setVan] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);
  return (
    <div>
      {van.name}
      {van.id}
    </div>
  );
}

export default HostVanDetail;
