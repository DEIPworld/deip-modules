import { isEqual } from 'lodash';

import {
  attributeMethodsFactory,
  compactAttributes,
  expandAttributes, mapAttributesToModel, mapModelToAttributes
} from '@deip/attributes-module';

import { defineComponent } from '@deip/platform-util';
import { formFactory } from '@deip/platform-components';

export const attributedFormFactory = (
  scope,
  prop = 'value',
  event = 'input',
) => (defineComponent({
  name: 'AttributedForm',

  mixins: [formFactory(prop, event)],

  props: {
    /**
     * Schema info
     */
    schema: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    /**
     * Get computed attributes by scope
     */
    attributesMap() {
      return this.$store.getters['attributes/settings'].mappedKeys
        .filter((i) => i.key.split('.')[0] === scope && i.mapToModel)
        .map((i) => ({ key: i.key.split('.')[1], value: i.value }));
    },
    /**
     * Get computed attributes info by scope
     */
    attributesMapInfo() {
      return this.$store.getters['scopesRegistry/one'](scope).mappedKeys.attributes;
    },

    formData: {
      get() {
        const { attributes, ...mainModel } = expandAttributes(this.lazyFormData);

        const mappedModel = mapAttributesToModel(
          mainModel,
          attributes,
          this.attributesMap,
          this.attributesMapInfo
        );

        const mappedAttributes = mapModelToAttributes(
          mainModel,
          attributes,
          this.attributesMap
        );

        return {
          ...mappedModel,
          attributes: mappedAttributes
        };
      },
      set(val) {
        if (isEqual(val, this.lazyFormData)) return;

        this.lazyFormData = compactAttributes(val);
        this.$emit(event, val);
      }
    },
    /**
     * Get computed schema data
     */
    schemaData() {
      return {
        ...attributeMethodsFactory(
          this.formData,
          {
            scopeName: scope,
            scopeId: this.formData._id
          }
        )
      };
    }
  }
}));
