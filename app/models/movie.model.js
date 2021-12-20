module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      id: String,
      title: String,
      year: Number,
      description: String,
      poster: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("movies", schema);
  return Tutorial;
};
