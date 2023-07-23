import React from "react";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import { Link } from "react-router-dom";
import { Menu } from "../components/Menu";
export const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Post 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={"/write?edit=2"}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, unde!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad facilis
          explicabo inventore nam voluptate repudiandae unde fugiat, expedita
          ducimus quis sint, maxime veniam autem nisi fugit dolorum porro velit
          exercitationem nulla consequatur totam dolores qui rerum.
          Necessitatibus iusto hic itaque atque dolores reprehenderit suscipit
          quia? Assumenda maxime magni quod culpa, ut blanditiis numquam
          perspiciatis labore? Asperiores, atque. Doloribus libero est quasi
          voluptate et. Ipsam, dolores cum iure nesciunt, ad assumenda quos
          cupiditate sint officiis necessitatibus nostrum dicta. Iste, quasi
          veniam. Culpa vitae placeat iste impedit quia. Similique accusamus
          natus et quam ex laboriosam quod molestiae at quia eius dolore
          exercitationem inventore eos voluptatem, labore id earum quos numquam
          a ratione? Soluta, quidem sit quo veniam eligendi a animi laudantium
          ducimus beatae voluptatum incidunt similique earum iure nulla quia
          labore dignissimos. Itaque temporibus minus possimus consectetur nulla
          rerum, amet suscipit? A eos facilis soluta nemo assumenda voluptas
          cumque eum ab id omnis, nihil magni, inventore harum ea quisquam
          reiciendis nobis eius, animi unde reprehenderit enim! Dicta commodi,
          dignissimos libero placeat corrupti sapiente facilis repellat
          voluptates labore necessitatibus, quae non? Nam in at error vero nihil
          placeat quisquam, quia impedit officia veritatis est minus cumque
          cupiditate libero! Quam maiores delectus deleniti tempore!
        </p>
      </div>
      <Menu className="menu"></Menu>
    </div>
  );
};
