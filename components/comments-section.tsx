"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Send, User, Mail, CheckCircle2, Upload } from "lucide-react"

interface Comment {
  id: string
  name: string
  comment: string
  timestamp: string
  img?: string
}

const MOCK_COMMENTS: Comment[] = [
  {
    id: "1",
    name: "Miraziz Hakimjonov",
    comment:
      "EduOila and their consulting team built a complete digital system for our education center — website, mobile app, and management tools. They truly understood our workflow and made it smarter.",
    timestamp: "3 days ago",
    img: "/miraziz.jpg",
  },
  {
    id: "2",
    name: "Iftikhorbek Muminov",
    comment:
      "Their consulting and development service turned our ideas into a working platform — from backend to mobile APK. The team combines creativity with solid technical expertise.",
    timestamp: "1 week ago",
    img: "/iftixor.jpg",
  },
  {
    id: "3",
    name: "Oybek Mahmudjonov",
    comment:
      "As a private tutor, I needed a personal portfolio and scheduling tool. EduOila’s team delivered a modern website and app integration that made managing lessons effortless.",
    timestamp: "2 weeks ago",
    img: "/oybek.jpg",
  },

  {
    id: "5",
    name: "Farhod Ro'ziboyev",
    comment:
      "The EduOila Consulting team developed our custom business website and mobile solution exactly how we envisioned it. Clear communication, fast delivery, and professional results.",
    timestamp: "1 month ago",
    img: "/farhod.jpg",
  },


]


export function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>(MOCK_COMMENTS)
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  // Fetch comments from endpoint
  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true)
      try {
        const response = await fetch("/api/comments", {
          method: "GET",
        })

        if (response.ok) {
          const data = await response.json()
          setComments(data.comments || MOCK_COMMENTS)
        } else {
          // Show mock data if request fails
          setComments(MOCK_COMMENTS)
        }
      } catch (error) {
        // Always use mock data as fallback
        setComments(MOCK_COMMENTS)
      } finally {
        setIsLoading(false)
      }
    }

    fetchComments()
  }, [])

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file")
        return
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB")
        return
      }

      setPhotoFile(file)

      // Create preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !comment.trim()) {
      alert("Please fill in all fields")
      return
    }

    setIsSubmitting(true)

    const imageData =
      photoPreview || `https://ui-avatars.com/api/?name=${encodeURIComponent(name.trim())}&background=random`

    const newComment: Comment = {
      id: Date.now().toString(),
      name: name.trim(),
      comment: comment.trim(),
      timestamp: "just now",
      img: imageData,
    }

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          comment: comment.trim(),
          img: imageData,
        }),
      })

      // Add comment if response is 201 or on any response
      if (response.status === 201 || response.ok) {
        setComments([newComment, ...comments])
        setShowSuccess(true)
        window.dispatchEvent(
          new CustomEvent("newComment", {
            detail: newComment,
          }),
        )
        setTimeout(() => setShowSuccess(false), 5000)
      } else {
        // Still add comment even if not 201
        setComments([newComment, ...comments])
        setShowSuccess(true)
        window.dispatchEvent(
          new CustomEvent("newComment", {
            detail: newComment,
          }),
        )
        setTimeout(() => setShowSuccess(false), 5000)
      }

      setName("")
      setComment("")
      setPhotoFile(null)
      setPhotoPreview("")
    } catch (error) {
      // Still add comment on error (always use mock data behavior)
      setComments([newComment, ...comments])
      setShowSuccess(true)
      window.dispatchEvent(
        new CustomEvent("newComment", {
          detail: newComment,
        }),
      )
      setTimeout(() => setShowSuccess(false), 5000)
      setName("")
      setComment("")
      setPhotoFile(null)
      setPhotoPreview("")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="comments" className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
            <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] __className_bb4e88 relative z-10">
                Share Your Experience
            </h2>
          <p className="text-lg text-muted-foreground">Tell us about your experience with our IT consulting services</p>
        </div>

        {showSuccess && (
          <div className="mb-6 bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
            <p className="text-green-500 font-medium">
              Thank you! Your comment has been successfully submitted and will appear in testimonials.
            </p>
          </div>
        )}

        {/* Comment Form */}
        <div className="mb-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-white/30 transition-colors"
                  disabled={isSubmitting}
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="photo-upload"
                  className="flex items-center gap-2 w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-muted-foreground hover:border-white/30 transition-colors cursor-pointer"
                >
                  <Upload className="absolute left-3 h-5 w-5 text-muted-foreground" />
                  <span className="truncate">{photoFile ? photoFile.name : "Upload Photo (optional)"}</span>
                </label>
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {photoPreview && (
              <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg">
                <img
                  src={photoPreview || "/placeholder.svg"}
                  alt="Preview"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <span className="text-sm text-foreground">Photo ready to upload</span>
                <button
                  type="button"
                  onClick={() => {
                    setPhotoFile(null)
                    setPhotoPreview("")
                  }}
                  className="ml-auto text-sm text-red-400 hover:text-red-300"
                  disabled={isSubmitting}
                >
                  Remove
                </button>
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <textarea
                placeholder="Share your experience..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-white/30 transition-colors resize-none"
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? "Sending..." : "Send Comment"}
            </button>
          </form>
        </div>

        {/* Comments Display */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground mb-6">Recent Comments</h3>
          {isLoading ? (
            <div className="text-center py-8 text-muted-foreground">Loading comments...</div>
          ) : comments.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">No comments yet. Be the first to share!</div>
          ) : (
            comments.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start gap-4 mb-3">
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt={item.name}
                    className="h-10 w-10 rounded-full flex-shrink-0 object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.timestamp}</p>
                    </div>
                    <p className="text-foreground/80 mt-2">{item.comment}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
