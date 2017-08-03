
/**
 * Skill content type
 */
module.exports = {
  "name": "skill",
  "label": "Skill",
  "plural": "Skills",
  "icon": "university",
  "description": "Skills and experience I've acquired.",
  "timestamps": true,
  "publishable": false,
  "fields": {
    "name": {
      "name": "name",
      "label": "Name",
      "type": "text",
      "placeholder": "Name"
    },
    "rating": {
      "name": "rating",
      "label": "Rating",
      "type": "radio",
      "placeholder": "Rating",
      "options": [
        {
          "label": "0",
          "value": "0"
        },
        {
          "label": "1",
          "value": "1"
        },
        {
          "label": "2",
          "value": "2"
        },
        {
          "label": "3",
          "value": "3"
        },
        {
          "label": "4",
          "value": "4"
        },
        {
          "label": "5",
          "value": "5"
        }
      ]
    },
    "summary": {
      "name": "summary",
      "label": "Summary",
      "type": "textarea",
      "placeholder": "Summary",
      "editor": "markdown"
    },
    "created": {
      "name": "created",
      "label": "Created",
      "type": "datetime",
      "readonly": true
    },
    "updated": {
      "name": "updated",
      "label": "Updated",
      "type": "datetime",
      "readonly": true
    }
  },
  "labelField": "name"
}
