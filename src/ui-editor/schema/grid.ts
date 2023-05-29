/* eslint-disable import/extensions */
import {
  getEntityCombinedSelectionSchema,
  getEntitySeparatedSelectionSchema,
  secondaryInfoSchema,
  getBaseMainConfigSchema,
  customColorsSchema,
} from "./_schema-base";
import localize from "../../localize/localize";

const mainSchema = {
  ...getBaseMainConfigSchema("grid"),
  schema: [
    ...getBaseMainConfigSchema("grid").schema,
    {
      name: "invert_state",
      label: "Invert State",
      selector: { boolean: {} },
    },
    {
      name: "use_metadata",
      label: "Use Metadata",
      selector: { boolean: {} },
    },
  ],
};

const powerOutageGridSchema = [
  {
    name: "entity",
    selector: { entity: {} },
  },
  {
    type: "grid",
    column_min_width: "200px",
    schema: [
      { name: "label_alert", label: "Outage Label", selector: { text: {} } },
      { name: "icon_alert", label: "Outage Icon", selector: { icon: {} } },
      { name: "state_alert", label: "Outage State", selector: { text: {} } },
    ],
  },
] as const;

export const gridSchema = [
  getEntityCombinedSelectionSchema(),
  getEntitySeparatedSelectionSchema(),
  mainSchema,
  customColorsSchema,
  {
    title: localize("editor.secondary_info"),
    name: "secondary_info",
    type: "expandable",
    schema: secondaryInfoSchema,
  },
  {
    title: localize("editor.power_outage"),
    name: "power_outage",
    type: "expandable",
    schema: powerOutageGridSchema,
  },
] as const;
