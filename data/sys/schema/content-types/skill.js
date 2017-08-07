
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
          "label": "Never touched it",
          "value": "0"
        },
        {
          "label": "Have dabbled",
          "value": "1"
        },
        {
          "label": "Use it occasionally",
          "value": "2"
        },
        {
          "label": "Use it regularly",
          "value": "3"
        },
        {
          "label": "Know it well",
          "value": "4"
        },
        {
          "label": "I'm a master",
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
