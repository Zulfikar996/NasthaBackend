const eventModel = require("../Models/event");
const miscHelper = require("../Helpers");

module.exports = {
  getAll: async (request, response) => {
    try {
      const searchName = request.query.name || "";

      const result = await eventModel.getAll(searchName);
      miscHelper.response(response, 200, result);
    } catch (error) {
      miscHelper.customErrorResult(response, 404, "Internal Server Error!");
    }
  },

  inputEvent: async (request, response) => {
    try {
      const { title, location, date, participant, note } = request.body;
      const data = {
        title,
        location,
        date,
        participant,
        note,
      };
      console.log(data)
      const result = await eventModel.inputEvent(data);
      miscHelper.response(response, 200, data);
    } catch (error) {
      console.log(error)
      miscHelper.customErrorResult(response, 404, "Internal Server Error!");
    }
  },

  deleteEvent : async (request, response) => {
    try {
        const eventId = request.params.eventId
        const result = await eventModel.deleteevent(eventId)
        const deleteModel = {
                    id : eventId
                }
        miscHelper.response(response, 200, deleteModel)
    } catch (error) {
        miscHelper.customErrorResult(response, 404, 'Internal Server Error!')
      }
   }
};
