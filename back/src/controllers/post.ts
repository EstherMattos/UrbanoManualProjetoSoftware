import { Request, Response } from "express"

export const PostController = {
  async create(request: Request, response: Response) {
    try {
      const post = request.body

      //   const result = await PostModel.create(post);
      return response.status(200).json("result")
    } catch (err) {
      console.log("Post creation failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to create Post",
      })
    }
  },
  async getById(request: Request, response: Response) {
    try {
      const { post_id } = request.params
      //   const result = await Post.getById(post_id);

      return response.status(200).json("result")
    } catch (err) {
      console.log("Post getById failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to get Post",
      })
    }
  },
  async update(request: Request, response: Response) {
    try {
      const { post_id } = request.params
      const post = request.body
      //   const result = await PostModel.updateById(post_id, post);

      return response.status(200).json("result")
    } catch (err) {
      console.log("Post update failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to update Post",
      })
    }
  },
  async delete(request: Request, response: Response) {
    try {
      const { post_id } = request.params

      //   const result = await PostModel.deleteById(post_id);
      return response.status(200).json("result")
    } catch (err) {
      console.log("Post delete failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to delete Post",
      })
    }
  },
}
