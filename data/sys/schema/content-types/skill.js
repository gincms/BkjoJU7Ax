
/**
 * Skill content type
 */
module.exports = {
  "name": "skill",
  "label": "Skill",
  "icon": "book",
  "description": "Skills and experience I've acquired.",
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
      "type": "select",
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
    "body": {
      "name": "body",
      "label": "Body",
      "type": "textarea",
      "placeholder": "Body",
      "editor": "plain"
    },
    "created": {
      "name": "created",
      "label": "Created",
      "type": "datetime",
      "placeholder": "Created"
    },
    "updated": {
      "name": "updated",
      "label": "Updated",
      "type": "datetime",
      "placeholder": "Updated"
    }
  }
}
