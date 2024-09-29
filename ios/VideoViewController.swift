import Foundation
import UIKit
import AVKit

class VideoViewController: UIViewController {

    var player: AVPlayer?

    override func viewDidLoad() {
        super.viewDidLoad()

    }

    @objc func videoDidFinishPlaying() {
        // Действие после окончания воспроизведения видео
        self.dismiss(animated: true, completion: nil)
    }
}
