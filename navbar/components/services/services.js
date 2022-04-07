import React from "react";
import Link from "next/link";
import classes from "./services.module.scss";
import Section from "../section";

const Services = () => {
  return (
    <Section linkID={"services"}>
      <div className={classes.services}>
        <div className={classes.item}>
          <Link href="/projects">
            <a>
              <img src={"../../images/bobcat.jpg"} />
            </a>
          </Link>
          <h1>Grading Services</h1>
          <p>Leveling, grading, excavating, trenching, clearing brush.</p>
        </div>
        <div className={classes.item}>
          <Link href="/projects">
            <a>
              <img src={"../../images/deck-design.png"} />
            </a>
          </Link>
          <h1>Deck Design & Construction</h1>
          <p>
            Design your own deck or let our professionals design and build a
            deck for you.
          </p>
        </div>
        <div className={classes.item}>
          <img src={"../../images/deck-stain.png"} />
          <h1>Deck Staining & Restoration </h1>
          <p>Includes deck staining, painting, and restoration.</p>
        </div>
        <div className={classes.item}>
          <img src={"../../images/fence.png"} />
          <h1>Fence Staining, Painting & Restoration</h1>
          <p>Includes staining, painting and restoration of your fence.</p>
        </div>
        <div className={classes.item}>
          <Link href="/projects">
            <a>
              <img src={"../../images/renos.png"} />
            </a>
          </Link>
          <h1>Home Renos</h1>
          <p>
            From a full kitchen remodel to updating the master vanity, and
            everything in between
          </p>
        </div>
        <div className={classes.item}>
          <img src={"../../images/inside-flooring.jpg"} />
          <h1>Inside Flooring</h1>
          <p>Ceramic tile, LVP, Hardwood flooring and more.</p>
        </div>
        <div className={classes.item}>
          <img src={"../../images/landscape-design.png"} />
          <h1>Landscape Design</h1>
          <p>
            Includes any landscape design your heart desires. From patios,
            walkways and walls all the way to fire pits, pool landscapes and
            gardens.
          </p>
        </div>
        <div className={classes.item}>
          <img src={"../../images/fire-pit.jpg"} />
          <h1>Fire Pits</h1>
          <p>
            We can design the fire pit for you, or build your dream fire pit
            area.
          </p>
        </div>
        <div className={classes.item}>
          <img src={"../../images/mulching.png"} />
          <h1>Mulching</h1>
          <p>
            Your choice between Dyed Brown, Dyed Black, Dyed Red, Pine Bark,
            Cedar, Hardwood, and Double Ground Hardwood Mulch measured in yards.
          </p>
        </div>
        <div className={classes.item}>
          <img src={"../../images/patio-walkway.jpg"} />
          <h1>Patio Walkways</h1>
          <p>Stone, Pavers, Brick and much more.</p>
        </div>
        <div className={classes.item}>
          <img src={"../../images/retaining-wall.png"} />
          <h1>Retaining Wall</h1>
          <p>
            Includes design and installation of one or more retaining walls.
          </p>
        </div>
        {/* <div className={classes.item}>
          <img src={"../../images/leaf-removal.png"} />
          <h1>Leaf Removal</h1>
          <p>Removal of all leaves off of your property.</p>
        </div> */}
        <div className={classes.item}>
          <Link href="/projects">
            <a>
              <img src={"../../images/painting-interior.png"} />
            </a>
          </Link>
          <h1>Interior Painting</h1>
          <p>
            Includes all interior or exterior painting, can be one room or up to
            your whole house.
          </p>
        </div>
        {/* <div className={classes.item}>
          <img src={"../../images/pressure-washing.jpg"} />
          <h1>Pressure Washing</h1>
          <p>
            Includes pressure washing of almost anything. Walkways, Drive ways,
            Stairs, Decks, House Siding and so much more.
          </p>
        </div> */}
        {/* <div className={classes.item}>
          <img src={"../../images/shrub.png"} />
          <h1>Shrub and Tree Trimming & Shaping</h1>
          <p>Includes trimming and shaping of any tree, shrub or bush</p>
        </div> */}
      </div>
    </Section>
  );
};

export default Services;
