class Item < ApplicationRecord
  has_one_attached :image

  before_create :set_name

  private

  def set_name
    self.filename = image.filename.to_s
  end
end
