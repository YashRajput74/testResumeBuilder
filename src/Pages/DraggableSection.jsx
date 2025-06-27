// components/DraggableSection.jsx
import { useDrag, useDrop } from "react-dnd";

const ITEM_TYPE = "SECTION";

export default function DraggableSection({ id, index, moveSection, children }) {
  const [, refDrop] = useDrop({
    accept: ITEM_TYPE,
    hover(item) {
      if (item.index !== index) {
        moveSection(item.index, index);
        item.index = index;
      }
    },
  });

  const [, refDrag] = useDrag({
    type: ITEM_TYPE,
    item: { id, index },
  });

  return <div ref={(node) => refDrag(refDrop(node))}>{children}</div>;
}
